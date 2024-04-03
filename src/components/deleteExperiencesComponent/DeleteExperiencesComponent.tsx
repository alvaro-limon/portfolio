import { Button } from '@mui/material';

interface isDeletingGroupInterface {
    isDeleting: boolean,
    setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>
}

function DeleteExperiencesComponent({id, isDeletingGroup} : {id:number, isDeletingGroup:isDeletingGroupInterface }) {

    // isDeleting variables
    const {isDeleting, setIsDeleting} = isDeletingGroup;

    async function deleteExperience() {
        await fetch(`api/Experiences/${id}`, {
            method:'DELETE'
        });

        // Updating isDeleting
        if (!isDeleting) {
            setIsDeleting(true);
        }
    }

  return (
    <Button onClick={() => {deleteExperience()}}>
        Delete!
    </Button>
  )
}

export default DeleteExperiencesComponent