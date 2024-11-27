import React from 'react';
import { Bell } from 'lucide-react';

interface NotificationsPopoverProps {
  notifications: Notification[];
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsPopover: React.FC<NotificationsPopoverProps> = ({
  notifications,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-14 right-0 w-80 bg-gray-900 rounded-lg shadow-lg border border-gray-800 overflow-hidden">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">Notifications</h3>
          <Bell className="text-gray-400 w-5 h-5" />
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-800 hover:bg-gray-800 cursor-pointer
                ${notification.read ? 'opacity-60' : ''}`}
            >
              <div className="flex space-x-3">
                <img
                  src={notification.thumbnail}
                  alt=""
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <h4 className="text-white font-medium">{notification.title}</h4>
                  <p className="text-gray-400 text-sm">{notification.description}</p>
                  <span className="text-gray-500 text-xs">{notification.timestamp}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-gray-400 text-center">
            No new notifications
          </div>
        )}
      </div>
    </div>
  );
};