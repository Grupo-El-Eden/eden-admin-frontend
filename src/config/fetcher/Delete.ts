import axios, { AxiosResponse } from 'axios';

interface DeleteResponse<T> extends AxiosResponse<T> {
  data: T;
}

type DeleteFunction = <T>(
  url: string,
  token?: string,
  headers?: Record<string, string>
) => Promise<DeleteResponse<T>>;

export const Delete: DeleteFunction = async <T>(
  url: string,
  token?: string,
  headers?: Record<string, string>,
): Promise<DeleteResponse<T>> => {

  const response = await axios.delete<T>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    }
  });
  return response as DeleteResponse<T>;
};
