export interface AuthorResponse {
  value: Author[];
  links: Link[];
}

export interface Link {
  href: string;
  rel: Rel;
  method: Method;
}

export enum Method {
  Delete = 'DELETE',
  Get = 'GET',
  Post = 'POST',
}

export enum Rel {
  CreateCourseForAuthor = 'create_course_for_author',
  DeleteAuthor = 'delete_author',
  GetCoursesForAuthor = 'get_courses_for_author',
  Self = 'self',
}

export interface Author {
  id: string;
  name: string;
  age: number;
  mainCategory: string;
  links: Link[];
}
