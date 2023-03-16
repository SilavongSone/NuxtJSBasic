export const GET_STUDENT = gql`
  query MyQuery($where: student_bool_exp) {
    student(where: $where) {
      id
      std_address
      std_address_birth
      std_classroom
      std_date_of_birth
      std_fname
      std_gender
      std_lname
      std_parent
      std_phone
      std_id
    }
  }
`;
