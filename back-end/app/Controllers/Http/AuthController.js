'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

import * as auth from "@adonisjs/auth/src/Schemes/Api";
import {User} from "../../../../front-end/src/app/models/user.model";

/**
 * Resourceful controller for interacting with auths
 */
class AuthController {
  /**
   * Authenticates an user.
   * POST auth/login
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async login ({ request, response, view }) {
    const { email, password } = request.all()

    try {
      return await auth.attempt(email, password);
    } catch (e) {
      return {error: {code: 401, message: 'Username and/or password incorrect.'}};
    }
  }

  /**
   * Registers a new user
   * POST auth/register
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async register ({ request, response, view }) {
    const user = new User();
    user.fill(request.all());

    try {
      user.save();

      return {user};
    } catch (e) {
      return {error: {code: 422, message: 'Could not create user'}}
    }

  }
}

module.exports = AuthController
