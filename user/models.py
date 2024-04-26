from flask import Flask, jsonify, request
from passlib.hash import pbkdf2_sha256
from app import db
import uuid

class User:

    def signup(self):

        data = request.json

        # Create the user object
        user = {
            '_id': uuid.uuid4().hex,
            'name': data['name'],
            'email': data['email'],
            'password': data['password']
        }

        # Check if email is already in use
        existing_user = db.users.find_one({'email': data['email']})
        if existing_user:
            return jsonify({'error': 'Email already in use'}), 400

        # Encrypt the password
        user['password'] = pbkdf2_sha256.encrypt(user['password'])

        db.users.insert_one(user)

        return jsonify(user), 200
