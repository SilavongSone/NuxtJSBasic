export const INSERT_STUDENT_ONE = gql`
  mutation myMuta($object: student_insert_input!) {
    insert_student_one(object: $object) {
      id
    }
  }
`;
