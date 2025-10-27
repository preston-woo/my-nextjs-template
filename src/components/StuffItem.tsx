'use client';

import { deleteStuff } from '@/lib/dbActions';
import { Stuff } from '@prisma/client';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

const removeItem = (id: number) => {
  //console.log(`Remove item with id: ${id}`);
  deleteStuff(id);
};

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItem = ({ name, quantity, condition, id }: Stuff) => (
  <tr>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{condition}</td>
    <td>
      <Link href={`/edit/${id}`}>Edit</Link>
    </td>
    <td>
      <Button variant="danger" onClick={() => removeItem(id)}>
        <Trash />
      </Button>
    </td>
  </tr>
);

export default StuffItem;
