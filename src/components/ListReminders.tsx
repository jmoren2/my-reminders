import { useEffect, useState } from "react"
import axios from 'axios'
import DataTable, { TableColumn } from 'react-data-table-component';
import { Button } from "react-bootstrap";
import {FaRegTimesCircle} from "react-icons/fa";
import { idText } from "typescript";

const baseUri = 'http://10.0.0.202:4000'

export interface Reminder{
    title: string,
    body: string,
    date: string,
    _id: string
}

export default function ListReminders() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    axios.get<any, any>(`${baseUri}/api/reminder/list`).then(
            res => setReminders(res.data)
        )},
    [])

    const handleDelete = async (id: any) => {
        const body = {
            id: id
        }
        await axios.post<any, any>(`${baseUri}/api/reminder/delete`, body)
                   .then((res) => setReminders(res.data) );
    }


  const columns: TableColumn<Reminder>[] = [
    {
        name: 'Title',
        selector: (row: { title: string; }) => row.title,
    },
    {
        name: 'Body',
        selector: (row: { body: string; })  => row.body,
    },
    {
        name: 'Date Created',
        selector:  (row: { date: string; }) => new Date(row.date).toLocaleString()
    },
    {
        name: '',
        cell: (row) => (<Button onClick={() => handleDelete(row._id)} variant="danger"><FaRegTimesCircle /></Button>),

    }
];

  return (
      <>
        <DataTable
            title="Reminders List"
            className="table table-striped"
            columns={columns}
            data={reminders}
            striped
        />
      </>
  )
  }