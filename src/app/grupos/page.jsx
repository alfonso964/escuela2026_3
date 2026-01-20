import Form from '@/components/grupos/form'
import ListaGrupos from '@/components/grupos/lista'
import Modal from '@/components/modal'
import { obtenerGrupos } from '@/lib/data'
import { insertarGrupo } from '@/lib/actions'
import Link from 'next/link'
import { PlusIcon } from 'lucide-react'
import { Suspense } from 'react'


export default function PaginaGrupos() {

    const promesaGrupos = obtenerGrupos()  // Promesa, no usamos AWAIT

    return (
        <div className='p-4'>

            <div className='flex justify-center items-center gap-4 pb-4'>
                <h1 className='text-4xl'>
                    <Link href="/">Grupos</Link>
                </h1>

                <Modal openElement={
                    <PlusIcon size={32}
                        className='text-green-500 border border-green-500 rounded-full bg-green-200 p-2 cursor-pointer hover:text-green-500 hover:bg-green-300'
                    />}>
                    <h2 className='text-2xl font-bold'>INSERTAR GRUPO</h2>
                    <Form action={insertarGrupo} />
                </Modal>

            </div>

            <Suspense fallback={<p className='text-2xl text-blue-400'>Cargando...</p>}>
                <ListaGrupos
                    promesaGrupos={promesaGrupos}
                />
            </Suspense>
        </div>
    )
}


