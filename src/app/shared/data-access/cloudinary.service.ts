import { Injectable, signal, computed } from '@angular/core';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  private cld: Cloudinary;

  constructor() {
    this.cld = new Cloudinary({
      cloud: {
        cloudName: environment.cloudinary.cloudName,
      },
    });
  }

  getImage(publicId: string): CloudinaryImage {
    return this.cld.image(publicId);
  }

  async uploadImage(file: File): Promise<any> {
    const url = `https://api.cloudinary.com/v1_1/${environment.cloudinary.cloudName}/upload`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', environment.cloudinary.uploadPreset);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw error;
    }
  }
}
