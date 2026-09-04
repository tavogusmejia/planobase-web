-- Pegar en el SQL Editor de Supabase después de correr `pnpm seed`.
-- Todos los "esperado" tienen que cuadrar. Si no, el seed quedó a medias.

select 'projects'             as tabla, count(*) as filas, 24  as esperado from projects
union all
select 'project_translations',      count(*), 24  from project_translations where locale = 'es'
union all
select 'project_images',            count(*), 207 from project_images
union all
select 'categories',                count(*), 5   from categories
union all
select 'project_categories',        count(*), null from project_categories
union all
select 'posts',                     count(*), 1   from posts
union all
select 'services',                  count(*), 1   from services
order by tabla;

-- Proyectos que quedaron sin imágenes (solo debería salir comedor-universidad-del-valle)
select p.slug, count(i.id) as imagenes
from projects p left join project_images i on i.project_id = p.id
group by p.slug having count(i.id) = 0;

-- Proyectos sin traducción en español (no debería salir ninguno)
select p.slug from projects p
left join project_translations t on t.project_id = p.id and t.locale = 'es'
where t.project_id is null;

-- Reparto por categoría (para revisar que la clasificación tenga sentido)
select c.slug, count(*) as proyectos
from project_categories pc join categories c on c.id = pc.category_id
group by c.slug order by proyectos desc;
