// src/app/seller/change-password/page.tsx

'use client';

import React, { useState, FormEvent } from 'react';

// --- Define the Form Component INSIDE the page file ---

interface ChangePasswordFormProps {
  onSubmit: (data: { oldPassword: string; newPassword: string }) => Promise<void>;
  onCancel?: () => void;
  isSubmitting?: boolean;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  onSubmit,
  onCancel,
  isSubmitting = false,
}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Validations (keep as is)
    if (!oldPassword || !newPassword || !confirmPassword) {
      setError('All password fields are required.');
      return;
    }
    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New password and confirmation password do not match.');
      return;
    }
    if (oldPassword === newPassword) {
      setError('New password cannot be the same as the old password.');
      return;
    }

    try {
      await onSubmit({ oldPassword, newPassword });
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) { // <--- FIX 1: Changed from catch (err: any)
      console.error('Password change failed inside form:', err);
      // Type check the error before accessing properties
      let errorMessage = 'Failed to change password. Please try again.'; // Default
      if (err instanceof Error) {
        errorMessage = err.message; // Safely access message if it's an Error
      } else if (typeof err === 'string') {
         errorMessage = err; // Handle if a plain string was thrown
      }
      // Add more checks here if your onSubmit can throw other types of objects
      setError(errorMessage);
    }
  };

  // JSX for the form component (keep as is)
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-xl w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Old Password Field */}
        <div>
          <label htmlFor="old-password" className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
          <input
            type="password"
            id="old-password"
            name="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            disabled={isSubmitting}
            className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
            placeholder="Enter old password"
            required
          />
        </div>

        {/* New Password Field */}
        <div>
          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            id="new-password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={isSubmitting}
            className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
            placeholder="Enter new password (min. 8 characters)"
            required
            minLength={8}
          />
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isSubmitting}
            className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
            placeholder="Confirm new password"
            required
          />
        </div>

        {/* Error Message Display */}
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
         {onCancel && (
             <button
                type="button"
                onClick={onCancel}
                disabled={isSubmitting}
                className="w-full sm:w-auto justify-center rounded-full border border-indigo-600 bg-white px-6 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed"
             >
                Cancel
            </button>
         )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Changing...' : 'Change password'}
          </button>
        </div>
      </form>
    </div>
  );
};


// --- Define the MAIN Page Component ---
export default function ChangePasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePasswordSubmit = async (data: { oldPassword: string; newPassword: string }) => {
    setIsSubmitting(true);
    console.log("Submitting data from page:", data);
    try {
      // --- === YOUR API CALL GOES HERE === ---
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      console.log('Password change simulated successfully!');
      // alert('Password changed!');

    } catch (error) { // <--- FIX 2: Changed from catch (error: any)
      console.error("Error during password change in page handler:", error);
      // Re-throw the error so the form component's catch block can handle it
      // No need to inspect the type here if we just re-throw
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
     window.history.back();
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center pt-10">
      <h1 className="text-2xl font-bold mb-6">Change Your Password</h1>
      <ChangePasswordForm
        onSubmit={handlePasswordSubmit}
        onCancel={handleCancel}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}