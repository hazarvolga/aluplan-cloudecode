'use client';
import { useState } from 'react';
import { Dialog } from '../../../project/components/feedback/Dialog';
import { Button } from '../../../project/components/actions/Button';

export function CatalogDialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Diyaloğu aç</Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Harici sayfaya gidiyorsunuz"
        description="Bağlantı yeni sekmede açılır. Bu site form göndermez."
        footer={<Button variant="ghost" onClick={() => setOpen(false)}>Vazgeç</Button>} />
    </>
  );
}
