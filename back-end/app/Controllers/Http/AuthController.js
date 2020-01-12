'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/auth/src/Auth')} Auth */

 import User from "../../Models/User";

// const {validate} = use('Validator')

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
<<<<<<< HEAD
  async login({request, response, view}) {
    const {email, password} = request.all()
=======
  async login ({ request, auth, response }) {
    const { email, password } = request.all();
>>>>>>> c1790555c862ab87a3b56f55cabb5447572221d7

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
<<<<<<< HEAD
  async register({request, response, view}) {
    const user = new User();
    const Hash = use('Hash');

    // const validate = validate(Request.all(), {
    //   email: 'required|email|unique:users,email'
    // });
    // console.log(validate);
    return 0;
    // user.fill(request.all());
    // user.password = await Hash.make(request.input('password'));

    // try {
    await user.save()
    return {user};
    // } catch (e) {
    //   return {error: {code: 422, message: 'Could not create user'}}
    // }
=======
  async register ({ request, response }) {

    const user = await User.create(request.all());

    try {
      return {user};
    } catch (e) {
      return {error: {code: 422, message: 'Could not create user'}}
    }
>>>>>>> c1790555c862ab87a3b56f55cabb5447572221d7

  }
}

module.exports = AuthController
