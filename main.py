from flask import Flask, request, render_template, redirect, jsonify, Response
import json

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/add/<num1>/<num2>')
def add(num1, num2):
  return jsonify(
    answer = int(num1) + int(num2)
  )

@app.route('/subtract/<num1>/<num2>')
def subtract(num1, num2):
  return jsonify(
    answer = int(num1) - int(num2)
  )


if __name__ == "__main__":
  # app.run(host='192.168.1.79', threaded=True, debug=True)
  app.run(host='0.0.0.0', threaded=True, debug=True)