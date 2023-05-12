import React from 'react';
import '../../main.css';
import GroupCarouselItem from './GroupsCarouselItem';

export default function GroupCarousel() {
  return (
    <div className="groups-carousel">
      <GroupCarouselItem />
      <GroupCarouselItem />
      <GroupCarouselItem />
    </div>
  );
}
