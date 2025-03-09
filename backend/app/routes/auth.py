from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import json
import os

print("Loading auth.py...")

router = APIRouter()

class LoginRequest(BaseModel):
    email: str
    password: str
    role: str

# Load users from JSON file
def load_users():
    users_file = os.path.join(os.path.dirname(__file__), '../data/users.json')
    try:
        with open(users_file, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        # Return default users if file doesn't exist
        return {
            "users": [
                {
                    "email": "patient@example.com",
                    "password": "patient123",
                    "role": "Patient"
                }
            ]
        }

@router.post("/login")
async def login(request: LoginRequest):
    users = load_users()
    
    # Find user by email
    user = next((user for user in users["users"] if user["email"] == request.email), None)
    
    if not user or user["password"] != request.password:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Check if user is logging in from correct portal
    if user["role"] != request.role:
        raise HTTPException(
            status_code=403, 
            detail=f"Unauthorized! Please login from the {user['role']} portal."
        )
    
    # Return role for frontend storage
    return {"role": user["role"]}
