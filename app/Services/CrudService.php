<?php

namespace App\Services;

abstract class CrudService
{
    public $model;

    protected function model($model)
    {
        $this->model = app($model);
    }

    public function _find($id, array $with = null)
    {
        return $with ? $this->model->with($with)->where('id', $id)->first() : $this->model->find($id);
    }

    public function _findBy(array $where, array $with = null)
    {
        return $with ? $this->model->with($with)->where($where)->first() : $this->model->where($where)->first();
    }

    public function _where(array $where, array $with = null)
    {
        return $with ? $this->model->with($with)->where($where)->get() : $this->model->where($where)->get();
    }

    public function _random($limit = 8, array $where = null, array $with = null)
    {
        $query = $where ? $this->model->where($where) : $this->model;
        return $with ? $query->with($with)->inRandomOrder()->limit($limit)->get()
            : $query->inRandomOrder()->limit($limit)->get();
    }

    public function _count(array $where = null)
    {
        return $where ? $this->model->where($where)->count() : $this->model->count();
    }

    public function _all(array $where = null, array $with = null)
    {
        $query = $where ? $this->model->where($where) : $this->model;
        return $with ? $query->with($with)->get() : $query->get();
    }

    public function _paginate($size = 20, array $where = null)
    {
        return $where ? $this->model->where($where)->paginate($size) : $this->model->paginate($size);
    }

    public function _create(array $data)
    {
        return $this->model->create($data);
    }

    public function _update($id, array $data)
    {
        return $this->model->find($id)->update($data);
    }

    public function _updateOrCreate(array $data, array $condition = null)
    {
        return $condition ?
            $this->model->updateOrCreate($condition, $data) :
            $this->model->updateOrCreate($data);
    }

    public function _firstOrCreate(array $data, array $condition = null)
    {
        return $condition ?
            $this->model->firstOrCreate($condition, $data) :
            $this->model->firstOrCreate($data);
    }

    public function _delete($id)
    {
        return $this->model->find($id)->delete();
    }

    public function _deleteWhere(array $where)
    {
        return $this->model->where($where)->delete();
    }

    public function _whereExists(array $where)
    {
        return $this->model->where($where)->exists();
    }
}
