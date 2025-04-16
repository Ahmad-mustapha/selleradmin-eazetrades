// src/components/auth/ChangePasswordForm.tsx
'use client';

import React, { useState, FormEvent } from 'react';

// Interface defining the props the form component expects
interface ChangePasswordFormProps {
  onSubmit: (data: { oldPassword: string; newPassword: string }) => Promise<void>;
  onCancel?: () => void;
  isSubmitting?: boolean;
}

// The reusable form component
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
      // Optionally clear fields after successful submission if desired
       setOldPassword('');
       setNewPassword('');
       setConfirmPassword('');
    } catch (err: any) {
      console.error('Password change failed:', err);
      setError(err.message || 'Failed to change password. Please try again.');
       // Do not clear fields on error so user can correct
    }
  };

  // Note: Removed the extra wrapping div from your code,
  // the bg-white/shadow should be on the form container itself.
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Old Password Field */}
        <div>
          <label
            htmlFor="old-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Old Password
          </label>
          <input
            type="password"
            id="old-password"
            name="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            disabled={isSubmitting}
            className="block w-full rounded-lg border-gray-200 bg-gray-100 px-4 py-2.5 text-sm placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
            placeholder="Enter old password"
            required
          />
        </div>

        {/* New Password Field */}
        <div>
          <label
            htmlFor="new-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={isSubmitting}
            className="block w-full rounded-lg border-gray-200 bg-gray-100 px-4 py-2.5 text-sm placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
            placeholder="Enter new password"
            required
            minLength={8}
          />
        </div>

        {/* Confirm Password Field */}
        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isSubmitting}
            className="block w-full rounded-lg border-gray-200 bg-gray-100 px-4 py-2.5 text-sm placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
            placeholder="Confirm password"
            required
          />
        </div>

        {/* Error Message Display */}
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="w-full rounded-full border border-indigo-600 bg-white px-6 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Changing...' : 'Change password'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm; // Export the component