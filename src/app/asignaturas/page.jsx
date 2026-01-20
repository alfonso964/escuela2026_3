import Form from '@/components/asignaturas/form'
import ListaAsignaturas from '@/components/asignaturas/lista'
import { obtenerAsignaturas } from '@/lib/data'
import { Suspense } from 'react'
import { insertarAsignatura } from '@/lib/actions'
import Modal from '@/components/modal'
import Link from 'next/link'
import { PlusIcon } from 'lucide-react'


export default function PaginaAsignaturas() {

    const promesaAsignaturas = obtenerAsignaturas()  // Promesa, no usamos AWAIT

    return (
        <div className='p-4'>

            <div className='flex justify-center items-center gap-4 pb-4'>
                <h1 className='text-4xl'>
                    <Link href="/">Asignaturas</Link>
                </h1>

                <Modal openElement={
                    <PlusIcon size={32}
                        className='text-green-500 border border-green-500 rounded-full bg-green-200 p-2 cursor-pointer hover:text-green-500 hover:bg-green-300'
                    />}>
                    <h2 className='text-2xl font-bold'>INSERTAR ASIGNATURA</h2>
                    <Form action={insertarAsignatura} />
                </Modal>

            </div>

            <Suspense fallback={<p className='text-2xl text-blue-400'>Cargando...</p>}>
                <ListaAsignaturas
                    promesaAsignaturas={promesaAsignaturas}
                />
            </Suspense>
        </div>
    )
}


