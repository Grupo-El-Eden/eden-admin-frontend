import axios, { AxiosResponse } from 'axios';

interface PostResponse<T> extends AxiosResponse<T> {
  data: T;
}

type PostFunction = <T>(
  url: string
) => Promise<PostResponse<T>>;

export const POST: PostFunction = async <T>(
  url: string,
  body?: unknown,
  token?: string,
  headers?: Record<string, string>
): Promise<PostResponse<T>> => {
  const response = await axios.post<T>(url, {
    body
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers
    }
  });
  return response as PostResponse<T>;
};
