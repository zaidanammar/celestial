'use client';

import Image from 'next/image';

type ProfileCardProps = {
  profile: {
    image: string;
    flag: string;
    name: string;
    position: string;
    experience: string;
    skills: Array<string>;
  };
};

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center h-full">
      <div className="relative size-20 sm:size-28 mx-auto mb-4">
        <Image src={profile.image} alt={profile.name} width={140} height={140} className="rounded-full object-cover" />
        <Image
          src={profile.flag}
          alt="Country Flag"
          width={25}
          height={20}
          className="absolute bottom-0 right-0 w-6 h-4 rounded-sm border border-white"
        />
      </div>

      <h3 className="text-xl font-bold">{profile.name}</h3>
      <p className="text-[#4A77FF] font-bold">
        {profile.position} · {profile.experience}
      </p>

      <div className="mt-4 space-y-2">
        {profile.skills.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            className="px-3 py-1 text-[#5E626F] text-xs sm:text-sm border rounded-lg border-[#C1C5CF] inline-block ml-2 font-bold">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
