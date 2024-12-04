import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * Firebase Storage에 이미지를 업로드하고 URL을 반환하는 함수
 * 
 * @param {object} formData - 이미지 파일이 포함된 FormData 객체
 * @param {string} storagePath - 파이어 스토리지의 경로
 * 
 * @returns {string} - 업로드된 이미지의 다운로드 URL
 */
export const uploadImageAndGetURL = async (formData, storagePath) => {
    const file = formData.get('image');
    if (!file) {
        throw new Error("No file provided in formData");
    }

    const storage = getStorage();
    const storageRef = ref(storage, storagePath);

    try {
        // 파일을 스토리지에 업로드
        const snapshot = await uploadBytes(storageRef, file);

        // 업로드된 파일의 URL 가져오기
        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL;
    } catch (error) {
        console.error("Error uploading image: ", error);
        throw error;
    }
};