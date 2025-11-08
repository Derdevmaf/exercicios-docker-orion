SELECT 
    a.nome AS nome_aluno,
    c.nome_curso AS nome_curso
FROM alunos a
INNER JOIN cursos c ON a.curso_id = c.id;

SELECT 
    a.nome AS nome_aluno,
    c.nome_curso AS nome_curso
FROM alunos a
INNER JOIN cursos c ON a.curso_id = c.id
WHERE c.nome_curso = 'Ciência de Dados';

SELECT * FROM cursos;

UPDATE alunos
SET curso_id = 1
WHERE nome = 'João Oliveira';

SELECT 
    a.nome AS nome_aluno,
    c.nome_curso AS nome_curso
FROM alunos a
INNER JOIN cursos c ON a.curso_id = c.id;

SELECT 
    c.nome_curso,
    a.nome AS nome_aluno
FROM cursos c
LEFT JOIN alunos a ON c.id = a.curso_id
WHERE a.id IS NULL;