export async function get<T>(url: string, params: any = null): Promise<T> {
  let full_url = url;
  if (params) {
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


export async function post<T>(url: string, body: any = null): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data as T;
}


export async function del<T>(url: string, params: any = null, body: any = null): Promise<T> {
  let full_url = url;
  if (params) {
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
  const response = await fetch(full_url, {
    method: 'DELETE',
    body: body ? JSON.stringify(body) : null,
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
  delete: del,
}