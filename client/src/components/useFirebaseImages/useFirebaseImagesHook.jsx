import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import storage from '../../firebaseConfig';

function useFirebaseImages(dir, imageNamePattern) {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {

    if (!dir) return;
    
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage, dir);
        const imagesList = await listAll(storageRef);

        const matchingImages = imagesList.items.filter((item) => {
          const fileName = item.name;
          const pattern = new RegExp(imageNamePattern);
          return pattern.test(fileName);
        });

        const urls = await Promise.all(
          matchingImages.map(async (item) => {
            return getDownloadURL(item);
          })
        );

        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [dir, imageNamePattern]);

  // Return an array of image URLs
  return imageUrls.map((url, index) => ({
    id: index,
    src: url,
  }));
}

export default useFirebaseImages;
