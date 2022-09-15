import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
  listOfServices(): string {
    return 'List of services';
  }

  listOfSongs(): string {
    return 'List of songs';
  }
}
