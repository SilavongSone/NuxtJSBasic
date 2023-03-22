// import { GET_STUDENT } from './studentQuery';

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
      std_parent_phone
    }
  }
`;

export const GET_STUDENT_LIMIT = gql`
  query MyQuery($where: student_bool_exp) {
    student(where: $where, limit: 4) {
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
      std_parent_phone
    }
  }
`;

export const GET_STUDENT_PK = gql`
  query ($id: uuid!) {
    student: student_by_pk(id: $id) {
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
      std_parent_phone
    }
  }
`;
