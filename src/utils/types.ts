export type poapsClaimType = {
    gitPoapId: number;
    gitPoapEventId: number;
    poapTokenId: string | null;
    poapEventId: number;
    poapEventFancyId: string;
    name: string;
    year: number;
    description: string;
    imageUrl: string;
    repositories: string[];
    earnedAt:string;
    mintedAt: string | null;
    needsRevalidation: boolean;
    isDeprecated: boolean;
    }[];

export type esnElelment = { platform: string};
