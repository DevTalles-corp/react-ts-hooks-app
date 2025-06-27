import { useOptimistic, useState, useTransition } from 'react';
import { toast } from 'sonner';

interface Comment {
  id: number;
  text: string;
  optimistic?: boolean;
}

let lastId = 2;

export const InstagromApp = () => {
  const [isPending, startTransition] = useTransition();

  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: '¡Gran foto!' },
    { id: 2, text: 'Me encanta 🧡' },
  ]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, newCommentText: string) => {
      lastId++;
      return [
        ...currentComments,
        {
          id: lastId,
          text: newCommentText,
          optimistic: true,
        },
      ];
    }
  );

  const handleAddComment = async (formData: FormData) => {
    const messageText = formData.get('post-message') as string;

    addOptimisticComment(messageText);

    startTransition(async () => {
      // simular la petición http al servidor
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // setComments((prev) => [
      //   ...prev,
      //   {
      //     id: new Date().getTime(),
      //     text: messageText,
      //   },
      // ]);

      //! Este sería el código para revertir el proceso
      setComments((prev) => prev);
      toast('Error al agregar el comentario', {
        description: 'Intente nuevamente',
        duration: 10_000,
        position: 'top-right',
        action: {
          label: 'Cerrar',
          onClick: () => toast.dismiss(),
        },
      });
    });
  };

  return (
    <div className="bg-slate-700 h-screen flex flex-col items-center justify-center">
      {/* Post de ejemplo */}
      <div className="flex flex-col items-center justify-center bg-gray-300 rounded-t-3xl p-4 w-[500px]">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop"
          alt="Instagrom"
          className="object-cover rounded-xl mb-4"
        />
        <p className="text-black font-bold mb-4">
          Mira que interesante esta funcionalidad de la API de React.
        </p>
      </div>

      {/* Comentarios */}
      <ul className="flex flex-col items-start justify-center bg-gray-300 w-[500px] p-4">
        {optimisticComments.map((comment) => (
          <li key={comment.id} className="flex items-center gap-2 mb-2">
            <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-white text-center">A</span>
            </div>
            <p className="text-black">{comment.text}</p>
            {comment.optimistic && (
              <span className="text-gray-500 text-sm">enviando... </span>
            )}
          </li>
        ))}
      </ul>

      {/* Formulario de comentarios */}
      <form
        action={handleAddComment}
        className="flex flex-col items-center justify-center bg-gray-300 w-[500px] rounded-b-3xl p-4"
      >
        <input
          type="text"
          name="post-message"
          placeholder="Escribe un comentario"
          required
          className="w-full p-2 rounded-md mb-2 text-black bg-white"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
