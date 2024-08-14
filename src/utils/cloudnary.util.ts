import { error } from "console";
import { cloudinary } from "../../cloudinary.config";
import { NextRequest } from "next/server";

interface cloudinaryUploadResult {
  public_id: string;
  [key: string]: any;
}

export async function cloudinaryUpload(file: File) {
  const byte = await file.arrayBuffer();
  const buffer = Buffer.from(byte);

  const result = await new Promise<cloudinaryUploadResult>(
    (resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "next-cloudinary-uploads" },
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result as cloudinaryUploadResult);
        }
      );
      uploadStream.end(buffer);
    }
  );
  return result;
}
