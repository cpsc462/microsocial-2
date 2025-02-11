/**
 * @swagger
 * tags: 
 *    - name: Examples
 *      description: Example code. Do not use this as a real service
 *    - name: Users API 
 *    - name: Content API
 *    - name: Auth API
 *    - name: Schema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserId:
 *       type: integer
 *       minimum: 1
 *       readOnly: true
 *            
 * 
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           readOnly: true
 *           description: The auto-generated id of the User. Will be unique.
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 32
 *           pattern: '^[A-Za-z0-9_.-]{1,32}$'
 *           description: Name that they log in with. Must be unique
 *         password:
 *           type: string
 *           minLength: 4
 *           format: password
 *           description: No leading or trailing spaces. Never returned by an API.
 *         uri:
 *           type: string
 *           readOnly: true
 *           format: password
 *           description: URI to this object. Set by API at User creation.
 *       examples: [
 *         { id: 1, name: "alonzo", password: "lambda", uri: "http://lh:8/user/14" }
 *       ]
 * 
 * 
 *     RetrievedUser:
 *       type: object
 *       summary: User schema submitted when updating.
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           readOnly: true
 *           description: The auto-generated id of the book. Will be unique.
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 32
 *           pattern: '^[A-Za-z0-9_.-]{1,32}$'
 *           description: Name that they log in with. Must be unique
 *         uri:
 *           type: string
 *           readOnly: true
 *           format: password
 *           description: URI to this object. Set by endpoint at creation.
 *       examples: [
 *         { id: 1, name: "alonzo", uri: "http://lh:8/user/14" }
 *       ]
 * 
 * 
 *     CreatingUser:
 *       type: object
 *       required:
 *         - name
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 32
 *           pattern: '^[A-Za-z0-9_.-]{1,32}$'
 *           description: Name that they log in with. Must be unique
 *         password:
 *           type: string
 *           minLength: 4
 *           format: password
 *           description: Guess. No leading or trailing spaces. Never returned by an API.
 *       examples: [
 *         { name: "alonzo", password: "lambda" }
 *       ]
 * 
 * 
 *     UpdatingUser:
 *       type: object
 *       summary: User schema submitted when updating.
 *       required:
 *         - name
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 32
 *           pattern: '^[A-Za-z0-9_.-]{1,32}$'
 *           description: Name that they log in with. Must be unique
 *         password:
 *           type: string
 *           minLength: 4
 *           format: password
 *           description: Guess. No leading or trailing spaces. Never returned by an API.
 *       examples: [
 *         { name: "alonzo", password: "lambda" }
 *         ]
 * 
 * 
 *     PatchingUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 32
 *           pattern: '^[A-Za-z0-9_.-]{1,32}$'
 *           description: Name that they log in with. Must be unique
 *         password:
 *           type: string
 *           minLength: 4
 *           format: password
 *           description: Guess. No leading or trailing spaces. Never returned by an API.
 *       examples: [
 *         { name: "alonzo", password: "lambda" }
 *       ]
 */

