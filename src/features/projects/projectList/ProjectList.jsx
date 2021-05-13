import React from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects, selectProject, deleteProject }) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectListItem
          project={project}
          key={project.id}
          selectProject={selectProject}
          deleteProject={deleteProject}
        />
      ))}
    </>
  );
};

export default ProjectList;
