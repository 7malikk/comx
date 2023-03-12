import Cipher from '@ibnlanre/cipher';

const encryption_key = 'uEKBcN7kMKayW6SF8d0BtaJq60Musbp0';
const initialization_vector = 'hA7wB3e4v87ihj6R';

const cipher = new Cipher({
  initialization_vector,
  algorithm: 'aes-256-cbc',
  output_decoding: 'base64',
  input_encoding: 'utf-8',
  encryption_key,
});

export const { encrypt, decrypt } = cipher;
