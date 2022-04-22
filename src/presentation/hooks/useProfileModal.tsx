import React, { createContext, ReactNode, useContext, useState } from 'react';

type ProfileModalContextProps = {
    setModalState: () => void;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
    modalState: boolean;
};

const ProfileModalContext = createContext(null);

export const useProfileModal = (): ProfileModalContextProps => {
    const context = useContext(ProfileModalContext);

    if (!context) {
        throw new Error('useProfileModal must be used within a useProfileModalProvider');
    }

    return context;
};

type ProfileModalProviderProps = {
    children: ReactNode;
};

export const ProfileModalProvider: React.FC<ProfileModalProviderProps> = ({ children }) => {
    const [modalState, setModalState] = useState(false);

    const handleOpenModal = () => setModalState(true);
    const handleCloseModal = () => setModalState(false);

    return (
        <ProfileModalContext.Provider
            value={{
                modalState,
                setModalState,
                handleOpenModal,
                handleCloseModal,
            }}
        >
            {children}
        </ProfileModalContext.Provider>
    );
};
