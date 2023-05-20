import React, { useEffect, useState } from 'react';
import { image } from './ProfileImage.elements';
import Image from 'next/image';

const ProfileImage = () => {
  const [imgSrc, setImgSrc] = useState('');
  useEffect(() => { 
    fetch('', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNjZDA5NWIwZDg3MDY0NzQ3MTE5MWEiLCJpYXQiOjE2MTY0NDg3MjQsImV4cCI6MTYxNjcwNzkyNH0.cih87xL8CNyESTANYXlsHBoJXTvNkGg9_ItUwSP87qY'
      }
    }).then((response) => {
      // const data = `data:${response.headers['content-type']};base64,${new Buffer(response.data).toString('base64')}`;
      setImgSrc(response);
    });
  }, []);
  return  <Image src={imgSrc} alt="Profile Image" width={300} height={300} />;
}

export default ProfileImage;