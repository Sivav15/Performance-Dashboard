import React, { useRef } from "react";
import { FiLogOut } from "react-icons/fi";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface UserCardProps {
  name: string;
  status: string;
  onLogout: () => void;
  isCardVisible: boolean;
  setIsCardVisible: (visible: boolean) => void;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  status,
  onLogout,
  isCardVisible,
  setIsCardVisible,
}) => {
  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  const ref = useRef<null>(null);
  useOnClickOutside(ref, () => setIsCardVisible(false));
  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  return (
    <>
      {isCardVisible && (
        <div style={{ position: "relative" }} ref={ref}>
          <div
            className="w-64 bg-white shadow-md rounded-lg z-10 "
            style={{ position: "absolute", right: 0, top: 12 }}
          >
            <div className="flex items-center space-x-4 hover:bg-gray-200 px-2 py-1">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg">
                {getInitial(name)}
              </div>
              <div>
                <p className="text-md font-semibold">{name}</p>
                <p className="text-sm text-gray-500">{status}</p>
              </div>
            </div>
            <div
              className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:bg-gray-200 px-2 py-4"
              onClick={onLogout}
            >
              <FiLogOut className="text-lg" />
              <span className="font-semibold">Logout</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
