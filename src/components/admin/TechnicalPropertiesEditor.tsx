import React from 'react';
import { TechnicalProperty } from '@/types/product';

interface TechnicalPropertiesEditorProps {
  properties: TechnicalProperty[];
  onChange: (properties: TechnicalProperty[]) => void;
}

export const TechnicalPropertiesEditor: React.FC<TechnicalPropertiesEditorProps> = ({
  properties,
  onChange,
}) => {
  const handleAddProperty = () => {
    onChange([...properties, { key: '', value: '' }]);
  };

  const handleRemoveProperty = (index: number) => {
    const newProperties = properties.filter((_, i) => i !== index);
    onChange(newProperties);
  };

  const handlePropertyChange = (index: number, field: 'key' | 'value', value: string) => {
    const newProperties = properties.map((prop, i) => {
      if (i === index) {
        return { ...prop, [field]: value };
      }
      return prop;
    });
    onChange(newProperties);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Технические свойства</h3>
        <button
          type="button"
          onClick={handleAddProperty}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Добавить свойство
        </button>
      </div>
      
      <div className="space-y-3">
        {properties.map((property, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="flex-1">
              <input
                type="text"
                value={property.key}
                onChange={(e) => handlePropertyChange(index, 'key', e.target.value)}
                placeholder="Название свойства"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={property.value}
                onChange={(e) => handlePropertyChange(index, 'value', e.target.value)}
                placeholder="Значение"
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="button"
              onClick={() => handleRemoveProperty(index)}
              className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}; 