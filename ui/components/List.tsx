import React from 'react';

interface ListProps<T> {
  items: T[];
  layout?: 'grid' | 'row';
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ items, layout = 'grid', renderItem }: ListProps<T>) => {
  return (
    <div
      className={
        layout === 'grid'
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'grid grid-cols-1 gap-6'
      }
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

export default List;
