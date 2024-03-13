import Image from 'next/image';
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, logoSrc} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex gap-4">
        {logoSrc && <Image alt="timeline icon" className="w-12 h-12 rounded-md" src={logoSrc} />}
        <div className="flex flex-col pb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <span className="flex-1 font-medium italic sm:flex-none text-sm">{location}</span>
            <span>•</span>
            <span className="flex-1 sm:flex-none text-sm">{date}</span>
          </div>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
