import json
import os

def load_users():
    users_file = os.path.join(os.path.dirname(__file__), 'app/data/users.json')
    try:
        with open(users_file, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"File not found: {users_file}")
        return None

users = load_users()
print(users)

# Test if we can find a specific user
if users:
    user = next((user for user in users["users"] if user["email"] == "patient@example.com"), None)
    print(f"Found user: {user}")
