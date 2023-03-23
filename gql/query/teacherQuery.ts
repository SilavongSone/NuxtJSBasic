export const GET_TEACHERS = gql`
  query MyQuery($where: teachers_bool_exp) {
    teachers(where: $where) {
    id
    tc_address
    tc_courses
    tc_date_of_birth
    tc_email
    tc_fname
    tc_gender
    tc_lname
    tc_phone
    }
  }
`;

export const GET_TEACHERS_PK = gql`
query ($id: uuid!) {
    teacher: teachers_by_pk(id: $id) {
        id
        tc_address
        tc_courses
        tc_date_of_birth
        tc_email
        tc_fname
        tc_gender
        tc_lname
        tc_phone
    }
  }
`;