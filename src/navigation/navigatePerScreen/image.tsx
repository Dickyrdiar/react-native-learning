// ProfilePicture.tsx
import React, {useState} from 'react';
import {Image} from 'react-native';

interface ProfilePictureProps {
  imageUrl: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({imageUrl}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Image
      source={
        isLoggedIn
          ? {uri: imageUrl}
          : require('../../assets/icon/Button/user_fix.png')
      }
    />
  );
};

export default ProfilePicture;
