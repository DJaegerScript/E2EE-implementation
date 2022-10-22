import { enc, AES } from 'crypto-js';

const useFetch = () => {
  const cipheredFetch = async (url: string, body: string) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: cipherBody(body, true) }),
    });

    return cipherBody(await response.text());
  };

  const cipherBody = (data: string, isEncrypting?: boolean) => {
    const key = enc.Base64.parse('6Le0DgMTAAAAANokdEEial');
    const iv = enc.Base64.parse('mHGFxENnZLbienLyANoi');

    return isEncrypting
      ? AES.encrypt(JSON.stringify(data), key, { iv }).toString()
      : JSON.parse(AES.decrypt(data, key, { iv }).toString(enc.Utf8));
  };

  return { cipheredFetch };
};

export default useFetch;
