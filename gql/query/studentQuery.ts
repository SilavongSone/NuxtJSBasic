export const GET_STUDENT = gql`
  query MyQuery($where: student_bool_exp) {
    student(where: $where) {
      id
      name
      surname
    }
  }
`
