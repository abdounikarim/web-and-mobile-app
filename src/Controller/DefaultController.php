<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{route}", name="vue_pages", requirements={"route"="^(?!api).+"})
     */
    public function index()
    {
        return $this->render('base.html.twig');
    }
}
