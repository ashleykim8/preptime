import React from 'react';
import './AccountSettings.css'
const AccountSettings = ({user}) => {
  return (
    <div class="settings-container">

        <nav class="sidebar">
            <ul>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#account">Account</a></li>
                <li><a href="#notifications">Notifications</a></li>
                <li><a href="#privacy">Privacy</a></li>
            </ul>
        </nav>


        <main class="content">
            <section id="profile" class="settings-section">
                <h2>Profile Settings</h2>
                <form id="profile-form">
                    <div class="form-group">
                        <label for="profile-username">Username</label>
                        <input type="text" id="profile-username" name="profile-username" placeholder="Enter your username"/>
                    </div>
                    <div class="form-group">
                        <label for="profile-email">Email</label>
                        <input type="email" id="profile-email" name="profile-email" placeholder="Enter your email"/>
                    </div>
                    <button type="submit">Save Profile</button>
                </form>
            </section>

            <section id="account" class="settings-section">
                <h2>Account Settings</h2>
                <form id="account-form">
                    <div class="form-group">
                        <label for="current-password">Current Password</label>
                        <input type="password" id="current-password" name="current-password" placeholder="Enter your current password"/>
                    </div>
                    <div class="form-group">
                        <label for="new-password">New Password</label>
                        <input type="password" id="new-password" name="new-password" placeholder="Enter your new password"/>
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Confirm New Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your new password"/>
                    </div>
                    <button type="submit">Change Password</button>
                </form>
            </section>


            <section id="notifications" class="settings-section">
                <h2>Notification Preferences</h2>
                <form id="notifications-form">
                    <div class="form-group">
                        <label>
                            <input type="checkbox" id="email-notifications" name="email-notifications"/>
                            Email Notifications
                        </label>
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="checkbox" id="sms-notifications" name="sms-notifications"/>
                            SMS Notifications
                        </label>
                    </div>
                    <button type="submit">Save Notifications</button>
                </form>
            </section>


            <section id="privacy" class="settings-section">
                <h2>Privacy Settings</h2>
                <form id="privacy-form">
                    <div class="form-group">
                        <label>
                            <input type="checkbox" id="public-profile" name="public-profile"/>
                            Make my profile public
                        </label>
                    </div>
                    <button type="submit">Save Privacy Settings</button>
                </form>
            </section>
        </main>
    </div>
  );
};

export default AccountSettings;