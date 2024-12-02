export async function get<T>(url: string, params: any | undefined): Promise<T> {
  let full_url = url;
  if (params !== undefined) {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as { [key: string]: string })
    ).toString();
    full_url += queryString;
  }
  const response = await fetch(full_url, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data as T;
}


export async function post<T>(url: string, body: any): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data as T;
}


export const Fetch = {
  get: get,
  post: post,
}