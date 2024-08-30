import React from 'react';
import { Dialog } from '@/components/ui/dialog/dialog';
import Button from '@/components/ui/button/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface GoodDeedDialogProps {
  mode: 'create' | 'edit';
  initialTitle?: string;
  initialDescription?: string;
  onClose: () => void;
  onSave: (title: string, description: string) => void;
}

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string(),
});

export const GoodDeedDialog: React.FC<GoodDeedDialogProps> = ({
  mode,
  initialTitle = '',
  initialDescription = '',
  onClose,
  onSave,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialTitle,
      description: initialDescription,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onSave(values.title, values.description || "");
  };

  return (
    <Dialog onClose={onClose}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <h3 className="text-2xl font-medium text-center mb-6">
          {mode === 'create'
            ? 'Создать'
            : 'Редактировать'}
        </h3>
        <input
          className="bg-shark px-4 py-2 rounded-lg w-full"
          type="text"
          placeholder="Название"
          {...form.register('title')}
        />
        <textarea
          className="bg-shark px-4 py-2 rounded-lg w-full resize-none"
          placeholder="Описание"
          rows={10}
          {...form.register('description')}
        />
        <div className="grid grid-cols-2 gap-2">
          <Button type="submit">
            {mode === 'create' ? 'Создать' : 'Сохранить'}
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Отмена
          </Button>
        </div>
      </form>
    </Dialog>
  );
};
