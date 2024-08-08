import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        role: '',
        bio: '',
        profilePicture: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profilePicture: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <div className="form-container">
            <h2>User Profile Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select 
                        id="role" 
                        name="role" 
                        value={formData.role} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="mentor">Mentor</option>
                        <option value="mentee">Mentee</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="profilePicture">Profile Picture</label>
                    <input 
                        type="file" 
                        id="profilePicture" 
                        name="profilePicture" 
                        onChange={handleFileChange} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Bio/Introduction</label>
                    <textarea 
                        id="bio" 
                        name="bio" 
                        value={formData.bio} 
                        onChange={handleChange} 
                    ></textarea>
                </div>

                <div className="form-actions">
                    <button type="submit">Save Profile</button>
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
