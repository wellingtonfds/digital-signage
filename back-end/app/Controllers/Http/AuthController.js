'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/auth/src/Auth')} Auth */

 import User from "../../Models/User";

/**
 * Resourceful controller for interacting with auths
 */
class AuthController {

  /**
   * Authenticates an user.
   * POST api/login
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Auth} ctx.auth
   * @param {Response} ctx.response
   */
  async login ({ request, auth, response }) {
    const { email, password } = request.all();

    try {
      return await auth.attempt(email, password);
    } catch (e) {
      return {error: {code: 401, message: 'Username and/or password incorrect.'}};
    }
  }

  /**
   * Registers a new user
   * POST api/register
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async register ({ request, response }) {

    const user = await User.create(request.all());

    try {
      return {user};
    } catch (e) {
      return {error: {code: 422, message: 'Could not create user'}}
    }

  }
}

module.exports = AuthController
