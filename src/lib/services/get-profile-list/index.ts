import { GetProfileListResponse } from '@/lib/services/get-profile-list/types';

export async function getProfiles(): Promise<GetProfileListResponse> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profiles`);
    if (!res.ok) {
      console.error('Failed to fetch profiles:', res.statusText);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return [];
  }
}
