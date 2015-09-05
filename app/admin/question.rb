ActiveAdmin.register Question do
  permit_params :course_id, :section_id, :body, :answer
end
